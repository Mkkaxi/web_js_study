fetch('http://neteasecloudmusicapi.zhaoboy.com/banner')
      .then(data => data.json())
      .then(data => {
        console.log(data)
        const bannerEle = document.getElementById('banner')
        if (data.code == 200) { //状态码
          const banners = data.banners
          const html = banners.map((banner) => {
            return `
              <img src="${banner.imageUrl}">
            
            `
          })
          // console.log(banners, '++');
          console.log(html)
          bannerEle.innerHTML = html.join('')
          
          // for (let banner of banners) {
            //  console.log(banner);
            // const banner = document.getElementById('banner')
            // banner.innerHTML += `<img src="${banner.imageUrl}"/>`
          // }

        } 
        else {
          console.log('请求失败')
        }

      })