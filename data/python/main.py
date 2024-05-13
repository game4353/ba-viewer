import gdown # type: ignore
import requests
from pathlib import Path
from patoolib import extract_archive # type: ignore

root = Path(__file__).parent.parent.parent
assert root.name == "ba-viewer"
zip = root / "game.zip"

if not zip.exists():
    url = "https://script.google.com/macros/s/AKfycbwrou4rF5g3H7zdmFA73C2kpPa3G_BRHnnCGFE7DbL8tzAbp5owYioeSuwdI32hR6GP8w/exec"
    res = requests.get(url)
    res.raise_for_status()
    gdown.download(id=res.text, output=zip.as_posix()) # type: ignore
    extract_archive(zip.as_posix(), -1, root.as_posix())
