"""Set the final public page URL in the static sharing metadata before publishing."""
from pathlib import Path
from html import escape
from urllib.parse import urlparse,urljoin,quote
import re,sys
if len(sys.argv)!=2:raise SystemExit('Usage: python3 configure_share_url.py FINAL_PUBLIC_PAGE_URL')
url=sys.argv[1];parts=urlparse(url)
if parts.scheme!='https' or not parts.netloc or parts.query or parts.fragment:raise SystemExit('Use the final HTTPS page URL without a query string or fragment.')
if not parts.path.endswith('/') and not Path(parts.path).suffix:url+='/'
page=Path(__file__).with_name('index.html');s=page.read_text();safe=escape(url,quote=True);image=escape(urljoin(url,'poster.jpg'),quote=True)
s=re.sub(r'<meta property="og:url" content="[^"]*">\n?','',s);s=re.sub(r'<link rel="canonical" href="[^"]*">\n?','',s)
s=re.sub(r'(<meta (?:property="og:image"|name="twitter:image") content=")[^"]*(">)',lambda m:m[1]+image+m[2],s)
s=s.replace('<!-- SHARE METADATA END -->',f'<meta property="og:url" content="{safe}">\n<link rel="canonical" href="{safe}">\n<!-- SHARE METADATA END -->')
s=re.sub(r'(id="share-linkedin" href=")[^"]*(")',lambda m:m[1]+'https://www.linkedin.com/sharing/share-offsite/?url='+quote(url,safe='')+m[2],s)
page.write_text(s);print('Sharing metadata configured for '+url)
