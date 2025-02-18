export default {
    
//设置通用翻译

"AI Service": "AI 服务",
"Select the AI service provider": "选择 AI 服务提供商",
"Ollama (Local)": "Ollama (本地)",
"Model": "模型",
"Failed to fetch models": "无法获取模型列表",
"API Key": "API 密钥",
"Custom API Address": "自定义 API 地址",
"If using a custom API proxy, please enter the full API address": "如果使用自定义 API 代理，请输入完整的 API 地址",
"Please enter your API Key": "请输入您的 API 密钥",
"Validating API Key...": "验证 API 密钥...",
"API Key verification successful!": "API 密钥验证成功!",
"API Key verification failed. Please check your API Key.": "API 密钥验证失败，请检查您的 API 密钥。",
"Save": "保存",
"Cancel": "取消",
"Edit": "编辑",
"Delete": "删除",

//OpenAI 设置

"Select the OpenAI model to use": "选择 OpenAI 模型",
"OpenAI Settings": "OpenAI 设置",
"Enter your OpenAI API Key and press Enter to validate": "输入您的 OpenAI API 密钥，然后按 Enter 键进行验证",
"No available models found.": "无法获取模型列表。",

//Anthropic 设置

"Anthropic Settings": "Anthropic 设置",
"Enter your Anthropic API Key, press Enter to verify.": "输入您的 Anthropic API 密钥，然后按 Enter 键进行验证",
"Select the Anthropic model to use": "选择 Anthropic 模型",

//Gemini 设置

"Select the Gemini model to use": "选择 Gemini 模型",
"Unable to create model selection dropdown menu.": "无法创建模型选择下拉菜单。",
"Gemini Settings": "Gemini 设置",
"Enter your Gemini API Key and press Enter to validate": "输入您的 Gemini API 密钥，然后按 Enter 键进行验证",
"Please enter your API Key first": "请先输入您的 API 密钥",

//Ollama 设置

"Ollama Settings": "Ollama 设置",
"Server Address": "服务器地址",
"Ollama server address (default: http://localhost:11434)": "Ollama 服务器地址（默认：http://localhost:11434）",
"Check": "验证",
"Successfully connected to Ollama service": "成功连接到 Ollama 服务",
"No models found. Please download models using ollama": "未找到模型。请使用 ollama 下载模型",
"Could not connect to Ollama service": "无法连接到 Ollama 服务",
"Failed to connect to Ollama service. Please check the server address.": "无法连接到 Ollama 服务，请检查服务器地址。",
"Currently selected model (Test connection to see all available models)": "当前选择的模型（测试连接以查看可用模型）",
"Select a model to use": "选择一个模型",
"No models available. Please load an available model first.": "无可用模型，请先加载可用模型。",
"No models available": "无可用模型",

//Prompt 设置

    "Prompt Settings": "Prompt 设置",
    "Add Prompt": "添加 Prompt",
    "Input Prompt Name": "输入 Prompt 名称",
    "Input Prompt Content\nAvailable parameters:\n{{highlight}} - Current highlighted text\n{{comment}} - Existing comment": "输入 Prompt 内容\n可用参数:\n{{highlight}} - 当前高亮文本\n{{comment}} - 已存在的注释",
    "Prompt added": "Prompt 已添加",
    "Prompt updated": "Prompt 已更新",

//CommentInput

"Shift + Enter Wrap, Enter Save": "Shift + Enter 换行，Enter 保存",
"Delete comment": "删除评论",

//ActionButtons

    "Add Comment": "添加评论",
    "Export as Image": "导出为图片",

//AIButton

    "Select Prompt": "选择 Prompt",
    "Please add Prompt in the settings first": "请先在设置中添加 Prompt",
    "AI comments have been added": "AI 评论已添加",
    "AI comments failed:": "AI 评论失败：",

//ChatView

"Chat": "对话",
"Failed to process dropped highlight:": "无法处理删除的高亮：",
"highlighted notes": " 条高亮笔记",
"Input message...": "输入消息...",
"Unable to access the Ollama model, please check the service.": "无法访问 Ollama 模型，请检查服务是否正常运行",
"Unable to get Gemini model list, please check API Key and network connection.": "无法获取 Gemini 模型列表，请检查 API Key 和网络连接",

//ExportModal

    "Download": "下载",
    "Export successful!": "导出成功！",
    "Export failed, please try again.": "导出失败，请重试",

//CommentView

    "Loading...": "加载中...",
    "Search...": "搜索高亮或评论...",
    "No matching content found.": "未找到匹配的内容。",
    "The current document has no highlighted content.": "当前文档没有高亮内容。",
    "No corresponding file found.": "未找到相应的文件。",
    "Export failed: Failed to load necessary components.": "导出失败：加载必要组件失败。",
    "All Highlight": "全部高亮",
    "Export as notes": "导出为笔记",
    "Add File Comment": "添加文件评论",
    "File Comment": "文件评论",
    "Successfully exported highlights to: ": "成功导出高亮到：",
    "Failed to export highlights: ": "无法导出高亮：",

//index

    "Default Template": "默认模板",
    "Modern minimalist knowledge card style": "现代极简知识卡片风格",
    "Academic Template": "学术模板",
    "Formal style suitable for academic citations": "适用于学术引用的正式风格",
    "Social Template": "社交模板",
    "Modern style suitable for social media sharing": "适用于社交媒体分享的现代风格",

//main

    "Open AI chat window": "打开 AI 对话窗口",
    "Open HiNote window": "打开 HiNote 窗口",

// Settings
    'General Settings': '通用设置',
    'Export Path': '导出路径',
    'Set the path for exported highlight notes. Leave empty to use vault root. The path should be relative to your vault root.': '设置高亮笔记的导出路径。留空则使用 vault 根目录。路径应相对于 vault 根目录。',
    "Exclusions": "排除",
    "Comma separated list of paths, tags, note titles or file extensions that will be excluded from highlighting. e.g. folder1, folder1/folder2, [[note1]], [[note2]], *.excalidraw.md": "逗号分隔的路径，标签，笔记标题或文件扩展名，将从高亮中排除。例如：folder1, folder1/folder2, [[note1]], [[note2]], *.excalidraw.md",
    "Text Extraction Settings": "文本提取设置",
    "Use Custom Pattern": "使用自定义模式",
    "Enable to use a custom regular expression for extracting text.": "启用自定义正则表达式以提取文本。",
    "Custom Pattern": "自定义模式",
    "Enter a custom regular expression for extracting text. Use capture groups () to specify the text to extract. The first non-empty capture group will be used as the extracted text.": "输入自定义正则表达式以提取文本。使用捕获组 () 指定要提取的文本。第一个非空捕获组将用作提取的文本。",
    "Default Color": "默认颜色",
    "Set the default color for decorators when no color is specified. Leave empty to use system default.": "设置当未指定颜色时的装饰器的默认颜色。留空以使用系统默认颜色。",


// 其他

    "Open (DoubleClick)": "双击打开"

};
