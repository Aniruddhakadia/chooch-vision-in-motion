CHOOCH · VISION IN MOTION — OFFICIAL WEBSITE PACKAGE

The approved 2:29 MP4 is unchanged. The page preserves its current questions,
answers, captions, controls and Chooch branding. HTML, CSS, JavaScript and question
data are contained in index.html. No build process, account or external player is required.

PUBLISH ON CHOOCH'S WEBSITE
1. Choose the final public page address on chooch.com with your web team.
2. In this folder, run:
   python3 configure_share_url.py FINAL_PUBLIC_PAGE_URL
   Replace FINAL_PUBLIC_PAGE_URL with the actual HTTPS address, including the
   chosen page path. This sets the canonical URL and absolute sharing-image URL.
   Alternatively, your CMS team can set og:url, canonical, og:image and
   twitter:image directly in the HTML head to the same final public addresses.
3. Upload index.html, Chooch_Vision_in_Motion.mp4, poster.jpg,
   chooch-logo.webp and captions.vtt into the same public folder. Publish that
   folder over HTTPS. If using a CMS, its team can host this complete page on a
   static route, or embed its public URL using an iframe.

Example iframe (replace FINAL_PUBLIC_PAGE_URL before using):
<iframe src="FINAL_PUBLIC_PAGE_URL" title="Chooch · Vision in Motion"
        width="100%" height="1400" style="border:0" allowfullscreen></iframe>

LINKEDIN
Paste the final public webpage URL into the LinkedIn post. The page contains
Open Graph title, description and thumbnail metadata, plus a Share on LinkedIn
button that opens LinkedIn's share composer. Alternatively, use the included MP4
for a video post. Publishing a post remains with your LinkedIn account.
The current Sites preview retains its existing access restrictions; use the
public chooch.com page URL for external sharing.

WEB HOST SETTINGS
Serve .html as text/html, .mp4 as video/mp4, .vtt as text/vtt,
.jpg as image/jpeg and .webp as image/webp. Allow byte-range requests for video
seeking. Keep poster.jpg publicly accessible for social link previews.

CHECK AFTER PUBLISHING
Play the film; enable Voice and captions; jump to an answer; confirm the total
runtime is 2:29. Confirm the final URL and poster can be opened without sign-in.

CONTENTS
index.html — complete responsive HTML page
Chooch_Vision_in_Motion.mp4 — approved video, unchanged
poster.jpg — opening-page poster and social thumbnail
chooch-logo.webp — existing Chooch logo
captions.vtt — existing English captions
configure_share_url.py — optional metadata configuration helper
manifest.json — file integrity and duration details
