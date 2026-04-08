use std::fs;
use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize)]
struct MdFile {
    path: String,
    content: String
}

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

// 用rust开启dialog选择文件，windows上没问题，但是macos和linux上有bug
// 目前用前端dialog选择文件到rust侧读取文件内容并返回
// #[tauri::command]
// fn open_file(app: tauri::AppHandle) -> Result<MdFile, String> {
//     let file_path = app.dialog().file().add_filter("Markdown", &["md"]).blocking_pick_file();

//     match file_path {
//         Some(path) => Ok(MdFile { path: path.to_string(), content: fs::read_to_string(path.to_string())
//             .unwrap_or_else(|_| "Failed to read the file.".to_string()) }),
//         None => Err("No file selected.".to_string()),
//     }
// }

#[tauri::command]
fn read_file(path: &str) -> Result<String, String> {
    Ok(fs::read_to_string(path).unwrap_or_else(|_| "Failed to read the file.".to_string()))
}

#[tauri::command]
fn save(md_file: MdFile) -> Result<(), String> {
    
    fs::write(md_file.path, md_file.content)
        .map_err(|e| format!("Failed to save the file: {}", e))?;

    Ok(())
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet, read_file, save])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
