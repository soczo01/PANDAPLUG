import os
import re

images_folder = "images"

# Felesleges képek törlése
for wrong_id in [237, 238]:
    img_name = f"image{wrong_id}.png"
    img_path = os.path.join(images_folder, img_name)
    if os.path.exists(img_path):
        os.remove(img_path)
        print(f"Törölve: {img_name}")
    else:
        print(f"Nem található: {img_name}")

# Összes imageXXX.png fájl listázása
all_files = os.listdir(images_folder)
image_files = [
    f for f in all_files
    if f.startswith("image") and f.endswith(".png") and f[5:-4].isdigit()
]

# Csak 240-től felfelé (239 marad érintetlen!)
to_rename = [f for f in image_files if int(f[5:-4]) >= 240]

# Első kör: ideiglenes átnevezés, hogy ne legyen ütközés
for old_name in sorted(to_rename, key=lambda x: int(x[5:-4]), reverse=True):
    old_path = os.path.join(images_folder, old_name)
    tmp_name = old_name.replace(".png", "_tmp.png")
    tmp_path = os.path.join(images_folder, tmp_name)
    os.rename(old_path, tmp_path)
    print(f"🕓 Ideiglenesen átnevezve: {old_name} → {tmp_name}")

# Második kör: végleges átnevezés
tmp_files = [
    f for f in os.listdir(images_folder)
    if f.endswith("_tmp.png") and f.startswith("image")
]

# Biztonságosabb átnevezés: regex-szel kivonjuk a számot, ellenőrizzük létezést és kezeljük a hibákat
for tmp_name in sorted(tmp_files, key=lambda x: int(re.search(r'\d+', x).group()) if re.search(r'\d+', x) else 0, reverse=True):
    m = re.match(r'^image(\d+)_tmp\.png$', tmp_name)
    if not m:
        print(f"Átugorva (nem illeszkedik): {tmp_name}")
        continue
    old_id = int(m.group(1))
    new_id = old_id - 2
    if new_id < 1:
        print(f"Átugorva (új azonosító <1): {tmp_name} -> image{new_id}.png")
        continue
    new_name = f"image{new_id}.png"
    tmp_path = os.path.join(images_folder, tmp_name)
    new_path = os.path.join(images_folder, new_name)

    if not os.path.exists(tmp_path):
        print(f"Hiba: tmp fájl nem található: {tmp_path}")
        continue
    if os.path.exists(new_path):
        print(f"Figyelem: célfájl már létezik, kihagyva: {new_name}")
        continue
    try:
        os.rename(tmp_path, new_path)
        print(f"✅ Átnevezve: {tmp_name} → {new_name}")
    except Exception as e:
        print(f"Hiba átnevezéskor: {tmp_name} -> {new_name}: {e}")

print("🎉 Kész! A képek 240-től kezdve lettek eltolva, az image239.png megmaradt.")
