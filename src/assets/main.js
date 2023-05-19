const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCvpHJfsx8itotRe1o2kaYEw&part=snippet%2Cid&order=date&maxResults=10';
const content = document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd5ac6a827fmsh17be3aa79dd76a6p1ba318jsnf00378f0b8b9',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

(async () => {
    try {
        const response = await fetch(url, options);
        const videos = await response.json();
        const view = `
        ${videos.items.map(video => `
            <div class="group relative">
            <div
              class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
              <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
              <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${video.snippet.title}
              </h3>
            </div>
          </div>
        `).join('')}`;
        content.innerHTML = view;
    } catch (error) {
        console.error(error);
    }
})();