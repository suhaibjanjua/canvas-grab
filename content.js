/**
 * Canvas Grab Content Script
 * Injects a download button into the UI.
 */

function injectGrabButton() {
    // Check if the button already exists
    if (document.getElementById('canvas-grab-btn')) return;

    const btn = document.createElement('button');
    btn.id = 'canvas-grab-btn';
    btn.innerHTML = '<span>📥</span> Grab Content';

    btn.addEventListener('click', () => {
        // Simple logic to grab page content
        // This can be customized for specific selectors on ChatGPT or OneDrive
        const content = document.body.innerText;
        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);

        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const filename = `grab-${document.title.substring(0, 20)}-${timestamp}.txt`;

        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });

    document.body.appendChild(btn);
}

// Initial injection
injectGrabButton();

// Use an observer to ensure the button stays there if the SPA re-renders
const observer = new MutationObserver(() => {
    if (!document.getElementById('canvas-grab-btn')) {
        injectGrabButton();
    }
});

observer.observe(document.body, { childList: true, subtree: true });