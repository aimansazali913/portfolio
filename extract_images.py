import os
import sys
import zipfile
import fitz  # PyMuPDF

sys.stdout.reconfigure(encoding='utf-8')

# Possible search folders for source documents
search_dirs = [
    ".",
    r"C:\Users\aiman\Downloads",
    r"C:\Users\aiman\Desktop",
    r"C:\Users\aiman\Documents",
    r"C:\Users\aiman\.gemini\antigravity-ide\brain\89819b95-1920-419c-be34-19842ac6416f\.user_uploaded"
]

def find_file(filename):
    if os.path.exists(filename):
        return filename
    for d in search_dirs:
        candidate = os.path.join(d, filename)
        if os.path.exists(candidate):
            return candidate
    return None

# 1. Map files to organized project folder names
projects = {
    "Project_1_Disinfection_Tunnel": "GROUP 65 PRESENTATION 2 [Autosaved].pdf",
    "Project_2_DCC_Train_JMRI": "signed_FYRP 2 aiman.pdf",
    "Project_3_HydroSense_Water_Filter": "IDP2 M2 FINAL REPORT (3DPMWF)(LATEST)-1.docx"
}

output_root = "Extracted_Project_Images"
os.makedirs(output_root, exist_ok=True)

# 2. Function to extract images from PDF files
def extract_from_pdf(pdf_path, out_dir):
    os.makedirs(out_dir, exist_ok=True)
    if not pdf_path or not os.path.exists(pdf_path):
        print(f"[!] File not found: {pdf_path}")
        return

    doc = fitz.open(pdf_path)
    count = 0
    for page_num in range(len(doc)):
        page = doc[page_num]
        image_list = page.get_images(full=True)
        for img_idx, img in enumerate(image_list):
            xref = img[0]
            base_image = doc.extract_image(xref)
            img_bytes = base_image["image"]
            img_ext = base_image["ext"]

            img_filename = os.path.join(out_dir, f"page_{page_num+1}_img_{img_idx+1}.{img_ext}")
            with open(img_filename, "wb") as f:
                f.write(img_bytes)
            count += 1
    print(f"[✓] Saved {count} images to '{out_dir}' from '{pdf_path}'")

# 3. Function to extract images from DOCX (unzipping internal media)
def extract_from_docx(docx_path, out_dir):
    os.makedirs(out_dir, exist_ok=True)
    if not docx_path or not os.path.exists(docx_path):
        print(f"[!] File not found: {docx_path}")
        return

    count = 0
    with zipfile.ZipFile(docx_path, 'r') as zip_ref:
        for file in zip_ref.namelist():
            if file.startswith("word/media/"):
                filename = os.path.basename(file)
                if filename:
                    img_data = zip_ref.read(file)
                    target_path = os.path.join(out_dir, filename)
                    with open(target_path, "wb") as f:
                        f.write(img_data)
                    count += 1
    print(f"[✓] Saved {count} images to '{out_dir}' from '{docx_path}'")

# 4. Execute extraction
for folder_name, filename in projects.items():
    dest_folder = os.path.join(output_root, folder_name)
    resolved_path = find_file(filename)
    if not resolved_path:
        print(f"[!] Could not locate: {filename}")
        continue
    print(f"[*] Processing {folder_name} -> {resolved_path}")
    if resolved_path.lower().endswith(".pdf"):
        extract_from_pdf(resolved_path, dest_folder)
    elif resolved_path.lower().endswith(".docx"):
        extract_from_docx(resolved_path, dest_folder)

print("\nAll done! Check the folder:", os.path.abspath(output_root))
