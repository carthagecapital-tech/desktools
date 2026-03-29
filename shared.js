// Toast
function showToast(msg) {
    const toast = document.getElementById('toast');
    toast.textContent = msg || 'Copied!';
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
}

function copyText(text) {
    navigator.clipboard.writeText(text);
    showToast('Copied!');
}

function copyOutput(id) {
    const el = document.getElementById(id);
    const text = el.value || el.textContent;
    navigator.clipboard.writeText(text);
    showToast('Copied to clipboard');
}
