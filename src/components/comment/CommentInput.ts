import { CommentItem, HighlightInfo } from "../../types";

export class CommentInput {
    private textarea: HTMLTextAreaElement;
    private actionHint: HTMLElement;

    constructor(
        private card: HTMLElement,
        private highlight: HighlightInfo,
        private existingComment: CommentItem | undefined,
        private options: {
            onSave: (content: string) => Promise<void>;
            onDelete?: () => Promise<void>;
            onCancel: () => void;
        }
    ) {}

    public show() {
        if (this.existingComment) {
            this.showEditMode();
        } else {
            this.showCreateMode();
        }
    }

    private showEditMode() {
        const commentEl = this.card.querySelector(`[data-comment-id="${this.existingComment!.id}"]`);
        if (!commentEl) return;

        const contentEl = commentEl.querySelector('.highlight-comment-content') as HTMLElement;
        if (!contentEl) return;

        const originalContent = contentEl.textContent || '';

        // 创建编辑框
        this.textarea = document.createElement('textarea');
        this.textarea.value = originalContent;
        this.textarea.className = 'highlight-comment-input';
        this.textarea.style.minHeight = `${contentEl.offsetHeight}px`;

        // 替换内容为编辑框
        contentEl.replaceWith(this.textarea);

        // 隐藏底部的时间和按钮
        const footer = commentEl.querySelector('.highlight-comment-footer');
        if (footer) {
            footer.addClass('hidden');
        }

        // 添加快捷键提示和删除按钮
        this.actionHint = commentEl.createEl('div', {
            cls: 'highlight-comment-actions-hint'
        });

        // 快捷键提示
        this.actionHint.createEl('span', {
            cls: 'highlight-comment-hint',
            text: 'Enter 保存，Shift + Enter 换行，Esc 取消'
        });

        // 删除按钮
        if (this.options.onDelete) {
            const deleteLink = this.actionHint.createEl('button', {
                cls: 'highlight-comment-delete-link',
                text: '删除评论'
            });

            deleteLink.addEventListener('click', async (e) => {
                e.stopPropagation();
                await this.options.onDelete?.();
            });
        }

        this.setupKeyboardEvents(contentEl, footer || undefined);
    }

    private showCreateMode() {
        const inputSection = document.createElement('div');
        inputSection.className = 'highlight-comment-input';

        // 创建文本框
        this.textarea = inputSection.createEl("textarea");

        // 添加快捷键提示
        inputSection.createEl('div', {
            cls: 'highlight-comment-hint',
            text: 'Enter 保存，Shift + Enter 换行，Esc 取消'
        });

        // 添加到评论区域
        let commentsSection = this.card.querySelector('.highlight-comments-section');
        if (!commentsSection) {
            commentsSection = this.card.createEl('div', {
                cls: 'highlight-comments-section'
            });
            
            commentsSection.createEl('div', {
                cls: 'highlight-comments-list'
            });
        }

        const commentsList = commentsSection.querySelector('.highlight-comments-list');
        if (commentsList) {
            commentsList.insertBefore(inputSection, commentsList.firstChild);
        }

        this.setupKeyboardEvents();
        this.textarea.focus();
    }

    private setupKeyboardEvents(contentEl?: HTMLElement, footer?: Element) {
        // 取消操作
        const cancelEdit = () => {
            if (this.existingComment) {
                if (contentEl && footer) {
                    this.textarea.replaceWith(contentEl);
                    this.actionHint.remove();
                    footer.removeClass('hidden');
                }
            } else {
                this.textarea.closest('.highlight-comment-input')?.remove();
                if (!this.card.querySelector('.highlight-comment')) {
                    this.card.querySelector('.highlight-comments-section')?.remove();
                }
            }
            this.options.onCancel();
        };

        // 保存操作
        const saveEdit = async () => {
            const content = this.textarea.value.trim();
            if (content) {
                await this.options.onSave(content);
            } else {
                cancelEdit();
            }
        };

        // 支持快捷键操作
        this.textarea.onkeydown = async (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                e.preventDefault();
                e.stopPropagation();
                cancelEdit();
            } else if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                e.stopPropagation();
                await saveEdit();
            }
        };
    }
} 