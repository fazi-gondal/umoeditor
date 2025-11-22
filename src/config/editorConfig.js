export const getEditorConfig = () => {
  return {
    editorKey: 'main-editor',
    locale: 'en-US',
    theme: 'light',
    height: '100%',
    fullscreenZIndex: 999,

    toolbar: {
      defaultMode: 'ribbon',
      menus: ['base', 'insert', 'table', 'tools', 'page', 'export'],
    },

    page: {
      layouts: ['page', 'web'],
      defaultMargin: {
        left: 3.18,
        right: 3.18,
        top: 2.54,
        bottom: 2.54,
      },
      defaultOrientation: 'portrait',
      defaultBackground: '#fff',
      showBreakMarks: false,
      showBookmark: false,
      showLineNumber: false,
      showToc: false,
      watermark: {
        type: 'compact',
        alpha: 0.2,
        fontColor: '#000',
        fontSize: 16,
        fontFamily: 'Arial',
        fontWeight: 'normal',
        text: '',
      },
    },

    document: {
      title: 'Untitled Document',
      content: '',
      placeholder: {
        en_US: 'Start typing your document here...',
        zh_CN: '请输入文档内容...',
      },
      enableSpellcheck: true,
      enableMarkdown: true,
      enableBubbleMenu: true,
      enableBlockMenu: true,
      readOnly: false,
      autofocus: true,
      characterLimit: 0,
      parseOptions: {
        preserveWhitespace: 'full',
      },
      autoSave: {
        enabled: true,
        interval: 30000,
      },
    },

    file: {
      allowedMimeTypes: [],
      maxSize: 1024 * 1024 * 100,
    },

    cdnUrl: 'https://unpkg.com/@umoteam/editor-external@latest',
    shareUrl: window.location.href,
  }
}