import zipfile
import os

excel_path = "Spreadsheet.xlsx"
output_folder = "images"

os.makedirs(output_folder, exist_ok=True)

with zipfile.ZipFile(excel_path, 'r') as z:
    for file in z.namelist():
        if file.startswith('xl/media/'):
            img_name = os.path.basename(file)
            img_path = os.path.join(output_folder, img_name)
            with open(img_path, 'wb') as f:
                f.write(z.read(file))
