document.addEventListener(&quot;DOMContentLoaded&quot;, () =&gt; {
  const banner = document.getElementById(&#39;offline-banner&#39;);
  const icon = document.getElementById(&#39;offline-icon&#39;);
  const text = document.getElementById(&#39;offline-text&#39;);
  let hideTimeout;

  const OFFLINE_SVG = `<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path d='M23.78.22c.29.29.29.77 0 1.06l-22.5 22.5c-.15.15-.34.22-.53.22-.19 0-.38-.07-.53-.22-.29-.29-.29-.77 0-1.06l12.2-12.2c-2.38-.11-4.79.72-6.6 2.54-.39.39-1.02.39-1.41 0-.39-.39-.39-1.02 0-1.41 2.66-2.66 6.37-3.62 9.8-2.91l2.43-2.43C11.78 4.58 6.15 5.65 2.28 9.53c-.39.39-1.02.39-1.41 0-.39-.39-.39-1.02 0-1.41 4.67-4.67 11.57-5.78 17.31-3.35L22.72.22c.29-.29.77-.29 1.06 0zM12 18.5c.69 0 1.25.56 1.25 1.25S12.69 21 12 21s-1.25-.56-1.25-1.25S11.31 18.5 12 18.5zM13.42 13.69c.97.25 1.89.74 2.65 1.5.39.39.39 1.02 0 1.41-.2.2-.45.29-.71.29-.26 0-.51-.1-.71-.29-.78-.78-1.83-1.14-2.86-1.09L11.57 15.53l1.84-1.84zM17.23 9.87c.85.47 1.65 1.06 2.37 1.78.39.39.39 1.02 0 1.41-.2.2-.45.29-.71.29-.26 0-.51-.1-.71-.29-.73-.73-1.56-1.29-2.44-1.71zM19.42 7.68l1.44-1.44c.8.55 1.56 1.17 2.27 1.88.39.39.39 1.02 0 1.41-.2.2-.45.29-.71.29-.26 0-.51-.1-.71-.29-.59-.59-1.23-1.12-1.89-1.58l-1.4 1.44z'/></svg>`;

  const ONLINE_SVG = `<svg viewBox='140 165 25 20'><path d='m142.8,169c6.1-5.6 15.3-5.6 21.4,0m-18,4c4.5-3.9 10.1-3.9 14.6,0m-10.8,3.7c2.5-1.7 4.6-1.7 7.1,0' fill='none' stroke='#00C853' stroke-linecap='round' stroke-width='2.5'/><circle cx='153.5' cy='180.7' fill='#00C853' r='1.25'/></svg>`;

  const prefersDark = window.matchMedia(&#39;(prefers-color-scheme: dark)&#39;);
  const setTheme = () =&gt; banner.className = prefersDark.matches ? &#39;dark&#39; : &#39;light&#39;;
  prefersDark.addEventListener(&#39;change&#39;, setTheme);
  setTheme();

  const showOffline = () =&gt; {
    clearTimeout(hideTimeout);
    icon.innerHTML = OFFLINE_SVG;
    text.textContent = &#39;Sin conexión a Internet.&#39;;
    banner.classList.add(&#39;show&#39;);
    banner.style.display = &#39;flex&#39;;
  };
  const showOnline = () =&gt; {
    icon.innerHTML = ONLINE_SVG;
    text.textContent = &#39;Conexión restablecida.&#39;;
    banner.classList.add(&#39;show&#39;);
    banner.style.display = &#39;flex&#39;;
    hideTimeout = setTimeout(() =&gt; {
      banner.classList.remove(&#39;show&#39;);
      setTimeout(() =&gt; banner.style.display = &#39;none&#39;, 400);
    }, 3000);
  };

  if (!navigator.onLine) showOffline();
  window.addEventListener(&#39;offline&#39;, showOffline);
  window.addEventListener(&#39;online&#39;, showOnline);

  // 🖼&#65039; LazyLoad optimizado para imágenes de Blogger
  document.querySelectorAll(&quot;img[src*=&#39;blogger.googleusercontent.com&#39;]&quot;).forEach(img =&gt; {
    img.src = img.src.replace(/\/s1600(-rw)?\//, &quot;/s800-rw/&quot;);
    img.loading = &quot;lazy&quot;;
    img.decoding = &quot;async&quot;;
  });
});