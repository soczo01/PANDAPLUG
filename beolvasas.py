import pandas as pd
import random
from PIL import Image
from collections import Counter
import os

# Excel beolvasása
excel_path = "Spreadsheet.xlsx"
df = pd.read_excel(excel_path)

# Alapsegédfüggvények
def get_dominant_color(image_path):
    """Kép alapján visszaadja a domináns színt szövegként."""
    try:
        img = Image.open(image_path)
        img = img.resize((50, 50))
        pixels = list(img.getdata())
        most_common = Counter(pixels).most_common(1)[0][0]
        r, g, b = most_common

        if r > 200 and g < 80 and b < 80:
            return "piros"
        elif g > 200 and r < 80 and b < 80:
            return "zöld"
        elif b > 200 and r < 80 and g < 80:
            return "kék"
        elif r > 200 and g > 200 and b > 200:
            return "fehér"
        elif r < 50 and g < 50 and b < 50:
            return "fekete"
        elif r > 200 and g > 150 and b < 100:
            return "sárga"
        elif r > 150 and b > 150 and g < 100:
            return "lila"
        else:
            return "szürke"
    except Exception:
        return "ismeretlen"

def random_meret():
    return random.choice(["XS", "S", "M", "L", "XL", "XXL"])

def random_elerhetoseg():
    return random.choice([1, 2])

def tipust_meghataroz(nev):
    n = nev.lower()
    if "polo" in n or "póló" in n:
        return "polo"
    elif "pulover" in n or "pulóver" in n:
        return "pulover"
    elif "nadrag" in n:
        return "nadrag"
    elif "rovid" in n or "short" in n:
        return "rovidnadrag"
    else:
        return "egyeb"

# --- Oszlopnevek automatikus felismerése ---
def find_col(cols, candidates):
    for c in cols:
        if str(c).strip().lower() in candidates:
            return c
    return None

nev_col = find_col(df.columns, {"nev", "name", "item name", "product name"})
ar_col = find_col(df.columns, {"ar", "usd $", "price", "usd", "ár"})
kep_col = find_col(df.columns, {"kep", "image", "img", "images"})

if nev_col is None or ar_col is None:
    print("Nem található név vagy ár oszlop! Ezek az oszlopok vannak az Excelben:", list(df.columns))

# TXT fájl előkészítése
# Feltételezzük, hogy az oszlopok sorrendje:
# 1. kép (elérési út vagy fájlnév)
# 2. termék neve
# 3. ár von-ban
# 4. ár dollárban (EZ KELL)
# 5. ár euróban

with open("adatok.txt", "w", encoding="utf-8") as f:
    for idx, row in df.iterrows():
        id_val = idx + 1
        nev = str(row.iloc[1]) if not pd.isna(row.iloc[1]) else "ismeretlen"
        ar = row.iloc[3] if not pd.isna(row.iloc[3]) else 0
        ar = int(round(float(ar)))  # egész szám, kerekítve
        szin = 1  # minden sorban 1
        meret = random.randint(1, 6)  # 1-6
        elerhetoseg = random.randint(1, 2)  # 1-2
        # típus hozzárendelése index alapján
        if 0 <= idx <= 230:
            tipus = 1  # polo
        elif 231 <= idx <= 286:
            tipus = 2  # nadrag
        elif 287 <= idx <= 311:
            tipus = 3  # rovidnadrag
        elif 312 <= idx <= 356:
            tipus = 4  # pulover
        else:
            tipus = 1
        nev_sql = nev.replace("'", "''")
        pic = f"'image{id_val}'"
        f.write(f"({id_val}, '{nev_sql}', {ar}, {szin}, {meret}, {elerhetoseg}, {tipus}, {pic}),\n")

print("✅ Az adatok sikeresen kinyerve és mentve az 'adatok.txt' fájlba!")
