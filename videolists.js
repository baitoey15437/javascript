const videosList =  [
  {
    name: "HLS",
    samples: [
      {
        name: "Test subtitle from CMS",
        uri: "https://d3gzgvi11qls5g.cloudfront.net/008ac9d5-6f93-4f45-9657-9c36f10b2ba9/hls/a9546d2e-dc63-4eb2-ad11-530669caf228.m3u8",
        img: "../img/1.png",
      },
      {
        name: "Test subtitle",
        uri: "https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8",
        img: "../img/2.png",
      },
      {
        name: "video 4:3",
        uri: "https://d3gzgvi11qls5g.cloudfront.net/b3af0281-3c26-47b9-a4db-9112a5b57386/hls/e868592c-1db4-4f0d-8ada-e23c6226b6a2.m3u8",
        img: "../img/3.png",
      },
      {
        name: "video 16:9",
        uri: "https://d15gjjit8vdfcf.cloudfront.net/13a37878-8631-41fd-a74d-906b83ff0f4b/hls/db104d32-edb6-421a-87a3-55dfb1f5c192.m3u8",
        img: "../img/4.png",
      },
      {
        name: "big buck bunny (Error)",
        uri: "https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8",
        img: "../img/5.png",
      },
      {
        name: "source bbtv",
        uri: "https://d2h3y69px6rxaj.cloudfront.net/6f3bd2a4-8d4a-4fb8-92c6-4b3d6a38a84e/hls/20daff6c-5b21-48a5-aa50-f55ffa767e88.m3u8",
        img: "../img/6.png",
      },
      {
        name: "Apple master playlist advanced (TS)",
        uri: "https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_ts/master.m3u8",
        img: "../img/2.png",
      },
      {
        name: "Apple 4x3 basic stream (TS)",
        uri: "https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_4x3/bipbop_4x3_variant.m3u8",
        img: "../img/2.png",
      },
      {
        name: "Apple 16x9 basic stream (TS)",
        uri: "https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_16x9/bipbop_16x9_variant.m3u8",
        img: "../img/2.png",
      },

      {
        name: "Apple master playlist advanced (FMP4)",
        uri: "https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8",
        img: "../img/2.png",
      },
      {
        name: "Apple media playlist (TS)",
        uri: "https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_4x3/gear1/prog_index.m3u8",
        img: "../img/2.png",
      },
      {
        name: "Apple media playlist (AAC)",
        uri: "https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_4x3/gear0/prog_index.m3u8",
        img: "../img/7.png",
      },
    ],
  },
  {
    name: "Live Test Akami",
    samples: [
      {
        name: "Live Test Akamai",
        uri: "https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8",
        img: "../img/8.png",
      },
    ],
  },
  {
    name: "MPEG-DASH",
    samples: [
      {
        name: "HD (MP4, H264)",
        uri: "https://storage.googleapis.com/wvmedia/clear/h264/tears/tears.mpd",
        img: "../img/9.png",
      },
      {
        name: "UHD (MP4, H264)",
        uri: "https://storage.googleapis.com/wvmedia/clear/h264/tears/tears_uhd.mpd",
        img: "../img/9.png",
      },
      {
        name: "HD (MP4, H265)",
        uri: "https://storage.googleapis.com/wvmedia/clear/hevc/tears/tears.mpd",
        img: "../img/9.png",
      },
      {
        name: "UHD (MP4, H265)",
        uri: "https://storage.googleapis.com/wvmedia/clear/hevc/tears/tears_uhd.mpd",
        img: "../img/9.png",
      },
      {
        name: "HD (WebM, VP9)",
        uri: "https://storage.googleapis.com/wvmedia/clear/vp9/tears/tears.mpd",
        img: "../img/9.png",
      },
      {
        name: "UHD (WebM, VP9)",
        uri: "https://storage.googleapis.com/wvmedia/clear/vp9/tears/tears_uhd.mpd",
        img: "../img/9.png",
      },
    ],
  },
  {
    name: "MPEG-DASH 60 FPS",
    samples: [
      {
        name: "HD (MP4, H264, Clear)",
        uri: "https://storage.googleapis.com/exoplayer-test-media-1/60fps/bbb-clear-1080/manifest.mpd",
      },
      {
        name: "4K (MP4, H264, Clear)",
        uri: "https://storage.googleapis.com/exoplayer-test-media-1/60fps/bbb-clear-2160/manifest.mpd",
      },
    ],
  },
  {
    name: "DASH - Multiple base URLs",
    samples: [
      {
        name: "DASH - Multiple base URLs",
        uri: "https://storage.googleapis.com/exoplayer-test-media-0/dash-multiple-base-urls/manifest.mpd",
      },
      {
        name: "DASH - Multiple base URLs (fail over)",
        uri: "https://storage.googleapis.com/exoplayer-test-media-0/dash-multiple-base-urls/manifest-failover.mpd",
      },
    ],
  },
  {
    name: "IMA sample ad tags",
    samples: [
      {
        name: "Single inline linear",
        uri: "https://storage.googleapis.com/exoplayer-test-media-1/mkv/android-screens-lavf-56.36.100-aac-avc-main-1280x720.mkv",
        img: "../img/10.png",
        ad_tag_uri:
          "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dlinear&correlator=",
      },
      {
        name: "Single skippable inline",
        uri: "https://storage.googleapis.com/exoplayer-test-media-1/mkv/android-screens-lavf-56.36.100-aac-avc-main-1280x720.mkv",
        img: "../img/10.png",
        ad_tag_uri:
          "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dskippablelinear&correlator=",
      },
      {
        name: "Single redirect linear",
        uri: "https://storage.googleapis.com/exoplayer-test-media-1/mkv/android-screens-lavf-56.36.100-aac-avc-main-1280x720.mkv",
        img: "../img/10.png",
        ad_tag_uri:
          "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dredirectlinear&correlator=",
      },
      {
        name: "Single redirect error",
        uri: "https://storage.googleapis.com/exoplayer-test-media-1/mkv/android-screens-lavf-56.36.100-aac-avc-main-1280x720.mkv",
        img: "../img/10.png",
        ad_tag_uri:
          "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dredirecterror&nofb=1&correlator=",
      },
      {
        name: "Single redirect broken (fallback)",
        uri: "https://storage.googleapis.com/exoplayer-test-media-1/mkv/android-screens-lavf-56.36.100-aac-avc-main-1280x720.mkv",
        img: "../img/10.png",
        ad_tag_uri:
          "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dredirecterror&correlator=",
      },
      {
        name: "VMAP pre-roll",
        uri: "https://storage.googleapis.com/exoplayer-test-media-1/mkv/android-screens-lavf-56.36.100-aac-avc-main-1280x720.mkv",
        img: "../img/10.png",
        ad_tag_uri:
          "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/ad_rule_samples&ciu_szs=300x250&ad_rule=1&impl=s&gdfp_req=1&env=vp&output=vmap&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ar%3Dpreonly&cmsid=496&vid=short_onecue&correlator=",
      },
      {
        name: "VMAP pre-roll + bumper",
        uri: "https://storage.googleapis.com/exoplayer-test-media-1/mkv/android-screens-lavf-56.36.100-aac-avc-main-1280x720.mkv",
        img: "../img/10.png",
        ad_tag_uri:
          "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/ad_rule_samples&ciu_szs=300x250&ad_rule=1&impl=s&gdfp_req=1&env=vp&output=vmap&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ar%3Dpreonlybumper&cmsid=496&vid=short_onecue&correlator=",
      },
      {
        name: "VMAP post-roll",
        uri: "https://storage.googleapis.com/exoplayer-test-media-1/mkv/android-screens-lavf-56.36.100-aac-avc-main-1280x720.mkv",
        img: "../img/10.png",
        ad_tag_uri:
          "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/ad_rule_samples&ciu_szs=300x250&ad_rule=1&impl=s&gdfp_req=1&env=vp&output=vmap&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ar%3Dpostonly&cmsid=496&vid=short_onecue&correlator=",
      },
      {
        name: "VMAP post-roll + bumper",
        uri: "https://storage.googleapis.com/exoplayer-test-media-1/mkv/android-screens-lavf-56.36.100-aac-avc-main-1280x720.mkv",
        img: "../img/10.png",
        ad_tag_uri:
          "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/ad_rule_samples&ciu_szs=300x250&ad_rule=1&impl=s&gdfp_req=1&env=vp&output=vmap&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ar%3Dpostonlybumper&cmsid=496&vid=short_onecue&correlator=",
      },
      {
        name: "VMAP pre-, mid- and post-rolls, single ads",
        uri: "https://storage.googleapis.com/exoplayer-test-media-1/mkv/android-screens-lavf-56.36.100-aac-avc-main-1280x720.mkv",
        img: "../img/10.png",
        ad_tag_uri:
          "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/ad_rule_samples&ciu_szs=300x250&ad_rule=1&impl=s&gdfp_req=1&env=vp&output=vmap&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ar%3Dpremidpost&cmsid=496&vid=short_onecue&correlator=",
      },
      {
        name: "VMAP pre-roll single ad, mid-roll standard pod with 3 ads, post-roll single ad",
        uri: "https://storage.googleapis.com/exoplayer-test-media-1/mkv/android-screens-lavf-56.36.100-aac-avc-main-1280x720.mkv",
        img: "../img/10.png",
        ad_tag_uri:
          "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/ad_rule_samples&ciu_szs=300x250&ad_rule=1&impl=s&gdfp_req=1&env=vp&output=vmap&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ar%3Dpremidpostpod&cmsid=496&vid=short_onecue&correlator=",
      },
      {
        name: "VMAP pre-roll single ad, mid-roll optimized pod with 3 ads, post-roll single ad",
        uri: "https://storage.googleapis.com/exoplayer-test-media-1/mkv/android-screens-lavf-56.36.100-aac-avc-main-1280x720.mkv",
        img: "../img/10.png",
        ad_tag_uri:
          "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/ad_rule_samples&ciu_szs=300x250&ad_rule=1&impl=s&gdfp_req=1&env=vp&output=vmap&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ar%3Dpremidpostoptimizedpod&cmsid=496&vid=short_onecue&correlator=",
      },
      {
        name: "VMAP pre-roll single ad, mid-roll standard pod with 3 ads, post-roll single ad (bumpers around all ad breaks)",
        uri: "https://storage.googleapis.com/exoplayer-test-media-1/mkv/android-screens-lavf-56.36.100-aac-avc-main-1280x720.mkv",
        img: "../img/10.png",
        ad_tag_uri:
          "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/ad_rule_samples&ciu_szs=300x250&ad_rule=1&impl=s&gdfp_req=1&env=vp&output=vmap&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ar%3Dpremidpostpodbumper&cmsid=496&vid=short_onecue&correlator=",
      },
      {
        name: "VMAP pre-roll single ad, mid-roll optimized pod with 3 ads, post-roll single ad (bumpers around all ad breaks)",
        uri: "https://storage.googleapis.com/exoplayer-test-media-1/mkv/android-screens-lavf-56.36.100-aac-avc-main-1280x720.mkv",
        img: "../img/10.png",
        ad_tag_uri:
          "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/ad_rule_samples&ciu_szs=300x250&ad_rule=1&impl=s&gdfp_req=1&env=vp&output=vmap&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ar%3Dpremidpostoptimizedpodbumper&cmsid=496&vid=short_onecue&correlator=",
      },
      {
        name: "VMAP pre-roll single ad, mid-roll standard pods with 5 ads every 10 seconds for 1:40, post-roll single ad",
        uri: "https://storage.googleapis.com/exoplayer-test-media-1/mkv/android-screens-lavf-56.36.100-aac-avc-main-1280x720.mkv",
        img: "../img/10.png",
        ad_tag_uri:
          "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/ad_rule_samples&ciu_szs=300x250&ad_rule=1&impl=s&gdfp_req=1&env=vp&output=vmap&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ar%3Dpremidpostlongpod&cmsid=496&vid=short_tencue&correlator=",
      },
      {
        name: "VMAP empty midroll",
        uri: "https://storage.googleapis.com/exoplayer-test-media-1/mkv/android-screens-lavf-56.36.100-aac-avc-main-1280x720.mkv",
        img: "../img/10.png",
        ad_tag_uri: "https://vastsynthesizer.appspot.com/empty-midroll",
      },
      {
        name: "VMAP full, empty, full midrolls",
        uri: "https://storage.googleapis.com/exoplayer-test-media-1/mkv/android-screens-lavf-56.36.100-aac-avc-main-1280x720.mkv",
        img: "../img/10.png",
        ad_tag_uri: "https://vastsynthesizer.appspot.com/empty-midroll-2",
      },
      {
        name: "VMAP midroll at 1765 s",
        uri: "https://storage.googleapis.com/exoplayer-test-media-1/mp4/frame-counter-one-hour.mp4",
        img: "../img/10.png",
        ad_tag_uri: "https://vastsynthesizer.appspot.com/midroll-large",
      },
      {
        name: "VMAP midroll ad pod at 5 s with 10 skippable ads",
        uri: "https://storage.googleapis.com/exoplayer-test-media-1/mp4/frame-counter-one-hour.mp4",
        img: "../img/10.png",
        ad_tag_uri:
          "https://vastsynthesizer.appspot.com/midroll-10-skippable-ads",
      },
      {
        name: "Playlist with three ad tags",
        playlist: [
          {
            uri: "https://storage.googleapis.com/exoplayer-test-media-1/mp4/android-screens-10s.mp4",
            ad_tag_uri:
              "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dlinear&correlator=",
          },
          {
            uri: "https://storage.googleapis.com/exoplayer-test-media-1/mp4/android-screens-25s.mp4",
            ad_tag_uri:
              "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/ad_rule_samples&ciu_szs=300x250&ad_rule=1&impl=s&gdfp_req=1&env=vp&output=vmap&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ar%3Dpremidpost&cmsid=496&vid=short_onecue&correlator=",
          },
          {
            uri: "https://storage.googleapis.com/exoplayer-test-media-1/mp4/frame-counter-one-hour.mp4",
            ad_tag_uri:
              "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/ad_rule_samples&ciu_szs=300x250&ad_rule=1&impl=s&gdfp_req=1&env=vp&output=vmap&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ar%3Dpremidpostlongpod&cmsid=496&vid=short_tencue&correlator=",
          },
        ],
      },
    ],
  },
];
console.log(videosList)

document.getElementById("show_video").innerHTML = 
  `<video id="video_default"  class="video-js vjs-default-skin" width="1120" height="600" controls autoplay>
  <source id= "source_video" type="application/x-mpegURL" src="https://d3gzgvi11qls5g.cloudfront.net/008ac9d5-6f93-4f45-9657-9c36f10b2ba9/hls/a9546d2e-dc63-4eb2-ad11-530669caf228.m3u8">
</video>
    `;
videojs('video_default').play();

var video_category = videosList[0].samples;
for (let y in video_category ){
  document.getElementById("list_video").innerHTML += 
  `<a href="#" onclick="getViideo(0,${y})">
  <table class="list">
    <tr>
        <td class="list-img"><img src="${video_category[y].img}" alt="" width="150" height="100"></td>
        <td class="list-desc">${video_category[y].name}</td>
      </tr>
  </table>
  `
}

var category = videosList;
for (let x in category ){
  document.getElementById("category_name").innerHTML += 
  `<button onclick = "ListViideo(${x})">${category[x].name}</button>`
}

const ListViideo = (x) => {
  document.getElementById("list_video").innerHTML = "";
  let list_samples = videosList[x].samples
  for (let y in list_samples ){
    document.getElementById("list_video").innerHTML += 
    `<a href="#" onclick="getViideo(${x},${y})">
    <table class="list" id="click_${x}_${y}">
      <tr>
          <td class="list-img"><img src="${list_samples[y].img}" alt="" width="150" height="100"></td>
          <td class="list-desc">${list_samples[y].name}</a></td>
        </tr>
    </table>`
  }
}

const getViideo = (category_index,video_index) => {
  var id = "video_" + Number(new Date());
  var video = videosList[category_index].samples[video_index];
  document.getElementById("title").innerHTML = video.name;
  var type;
  if (category_index == '5') {
    type = "video/mp4";
  } else {
    type = "application/x-mpegURL";
  }
  
  document.getElementById("show_video").innerHTML = 
  `<video id="${id}"  class="video-js vjs-default-skin" width="1120" height="600" controls autoplay>
      <source id= "source_video" type="${type}" src="${video.uri}">
    </video>
    `;
  videojs(id).play();
}