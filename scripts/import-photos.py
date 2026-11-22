import json, pathlib, re, urllib.request, urllib.parse, time, html
from html.parser import HTMLParser
ROOT = pathlib.Path('.')
def read(path, marker):
    return json.loads(path.read_text(encoding='utf-8').split(marker,1)[1].strip().rstrip(';'))
def write(path, marker, obj):
    path.write_text(marker + json.dumps(obj, ensure_ascii=False, indent=2) + ';\n', encoding='utf-8')
class Plain(HTMLParser):
    def __init__(self): super().__init__(); self.parts=[]
    def handle_data(self, data): self.parts.append(data)
def plain(value):
    p=Plain(); p.feed(value); return ''.join(p.parts).strip()
def get(url):
    req=urllib.request.Request(url, headers={'User-Agent':'IndiaTripPhotoImport/1.0 (https://github.com/furuharu1211/India-Trip; Wikimedia Commons attribution import)'})
    with urllib.request.urlopen(req,timeout=45) as r: return r.read()
def info(title):
    params={'action':'query','titles':title,'prop':'imageinfo','iiprop':'url|mime|extmetadata','iiurlwidth':1280,'format':'json','redirects':1}
    pages=json.loads(get('https://commons.wikimedia.org/w/api.php?'+urllib.parse.urlencode(params)))['query']['pages']
    page=next(iter(pages.values()))
    return page.get('imageinfo',[{}])[0]
sp=ROOT/'config/sightseeing.js'; tp=ROOT/'config/trip.js'
sm='window.TRIP_DATA = window.TRIP_DATA || {};\nwindow.TRIP_DATA.sightseeing = '
tm='window.TRIP_CONFIG = '
sight=read(sp,sm); trip=read(tp,tm)
replacements={}; credits=[]; failures=[]
for group in sight['groups']:
    for spot in group['spots']:
        for photo in spot['images']:
            src=photo['src']
            if not src.startswith('https://commons.wikimedia.org/'): 
                if photo.get('source'): credits.append((spot['title'],photo))
                continue
            try:
                filename=urllib.parse.unquote(urllib.parse.urlparse(src).path.split('/')[-1])
                detail=info('File:'+filename)
                meta=detail.get('extmetadata',{})
                m=lambda k: plain(meta.get(k,{}).get('value',''))
                licenseurl=meta.get('LicenseUrl',{}).get('value','')
                lic=m('LicenseShortName')
                author=m('Artist')
                url=detail.get('thumburl') or detail.get('url')
                if not url or not author or not licenseurl or not re.match(r'^https?://creativecommons.org/licenses/(by|by-sa)/',licenseurl): raise ValueError('Missing or unsupported license metadata')
                if detail.get('mime') not in ('image/jpeg','image/png','image/webp'): raise ValueError('Unsupported image format')
                raw=get(url)
                if len(raw)<1000 or len(raw)>15_000_000: raise ValueError('Unexpected image size')
                if raw.startswith(b'\xff\xd8\xff'): ext='jpg'
                elif raw.startswith(b'\x89PNG\r\n\x1a\n'): ext='png'
                elif raw[:4]==b'RIFF' and raw[8:12]==b'WEBP': ext='webp'
                else: raise ValueError('Not an image')
                path=ROOT/'images/sightseeing'/ (spot['id']+'.'+ext)
                path.parent.mkdir(parents=True,exist_ok=True); path.write_bytes(raw)
                photo.update(src=path.as_posix(),author=author,license=licenseurl,credit=lic,source=detail.get('descriptionurl',photo['source']))
                replacements[src]=path.as_posix(); credits.append((spot['title'],photo))
                print('Imported',spot['id'],len(raw))
            except Exception as e:
                failures.append((spot['id'],str(e))); print('FAILED',spot['id'],e)
                # Keep existing external image until a valid local copy is available.
                if photo.get('source'): credits.append((spot['title'],photo))
            time.sleep(1)
trip['heroImages']=[replacements.get(x,x) for x in trip['heroImages']]
write(sp,sm,sight);write(tp,tm,trip)
e=html.escape
lines=['<!doctype html><html lang="ja"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>画像クレジット</title><link rel="stylesheet" href="css/themes.css"><link rel="stylesheet" href="css/style.css"></head><body><main class="container inner-main"><h1>画像クレジット</h1><p><a href="index.html">HOMEへ戻る</a></p><ul>']
md=['# Photo credits','', 'Wikimedia Commons images; thumbnails resized by Commons.']
for title,photo in credits:
    lines.append(f'<li>{e(title)}: <a href="{e(photo["source"])}">{e(photo["author"])}</a> / Wikimedia Commons · <a href="{e(photo["license"])}">{e(photo["credit"])}</a></li>')
    md.append(f'- {title}: [{photo["author"]}]({photo["source"]}) — [{photo["credit"]}]({photo["license"]})')
lines.append('</ul></main></body></html>')
(ROOT/'photo-credits.html').write_text('\n'.join(lines),encoding='utf-8')
(ROOT/'images/PHOTO-CREDITS.md').write_text('\n'.join(md)+'\n',encoding='utf-8')
(ROOT/'images/IMPORT-STATUS.md').write_text('# Import status\n\nImported: '+str(len(replacements))+'\n\n'+'\n'.join(f'- {k}: {v}' for k,v in failures)+'\n',encoding='utf-8')
