import pandas as pd

excel_path = "Spreadsheet.xlsx"
df = pd.read_excel(excel_path)
df = df.dropna(how='all').reset_index(drop=True)

# Csak az első 358 sort vesszük
df = df.iloc[:358]

# Típusok leképezése (példa)
tipus_map = {
    't-shirts': 1,
    'pants': 2,
    'shorts': 3,
    'hoodies': 4,
    'sweaters': 4,
    'sweatshirts': 4
}

insert_sql = "INSERT INTO pandaplug1.termekek (tipus_id, nev, szin_id, meret_id, elerhetoseg_id, ar_usd) VALUES\n"
values = []
current_category = None

for _, row in df.iterrows():
    image = str(row['IMAGE']).strip().lower() if pd.notna(row['IMAGE']) else ''
    item = str(row['ITEM NAME']).strip() if pd.notna(row['ITEM NAME']) else None
    usd = row['USD $'] if pd.notna(row['USD $']) else None

    if image in tipus_map:
        current_category = image
        continue

    if item and current_category:
        tipus_id = tipus_map[current_category]
        nev = item.replace("'", "''")
        szin_id = 1
        meret_id = 1
        elerhetoseg_id = 1
        ar_usd = int(round(float(usd))) if usd else 0
        values.append(f"({tipus_id}, '{nev}', {szin_id}, {meret_id}, {elerhetoseg_id}, {ar_usd})")

insert_sql += ",\n".join(values) + ";"

with open("termekek_insert_358.sql", "w", encoding="utf-8") as f:
    f.write(insert_sql)

print("✅ termekek_insert_358.sql létrehozva.")