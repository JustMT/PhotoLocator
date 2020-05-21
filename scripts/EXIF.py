import PIL.Image as Im
from os import scandir
from PIL.ExifTags import GPSTAGS
from PIL.ExifTags import TAGS
from tkinter.filedialog import askopenfilename

TRAVEL = []
for e in scandir('../docs/photos'):
    if 'jpg' in e.name.lower():
        TRAVEL.append(e.name)

def get_exif(filename):
    """associer les tags réels aux données exif"""
    exif = Im.open(filename).get_exif()

    if exif is not None:
        for key, value in exif.items():
            name = TAGS.get(key, key)
            exif[name] = exif.pop(key)

        if 'GPSInfo' in exif:
            for key in exif['GPSInfo'].keys():
                name = GPSTAGS.get(key,key)
                exif['GPSInfo'][name] = exif['GPSInfo'].pop(key)

    return exif

file = open("EXIF.txt", "w")
for e in TRAVEL:
    print(e, file=file)
    try: 
        datagps = get_exif("../docs/photos/" + e)
        print(str(datagps['GPSInfo']), file=file)
    except KeyError as N:
        print("pas de données EXIF")

file.close()
