var url='http://localhost:3000'// 定义服务器地址
document.addEventListener('DOMContentLoaded', function() {// 获取所有带有 'nav-link' 类的链接元素
    var navLinks = document.querySelectorAll('.nav-link');  
    var currentPage = window.location.pathname.split('/').pop().split('.')[0]; // 获取当前页面的文件名（不包含扩展名）  
   // 遍历所有导航链接
    navLinks.forEach(function(link) {  
        var linkPath = link.getAttribute('href').split('/').pop().split('.')[0]; // 获取链接的文件名（不包含扩展名）  
        if (linkPath === currentPage) {  
            link.classList.add('active');  
        } else {  
            link.classList.remove('active');  
        }  // 如果链接路径与当前页面路径相同，则为该链接添加 'active' 类
    });  
    // API 调用示例
    fetch('http://localhost:3000/FundraiserList')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const list = document.getElementById('fundraiser-list');
            data.forEach(fundraiser => {
                const div = document.createElement('div');
                div.innerHTML = `
                    <h3>${fundraiser.CAPTION}</h3>
                    <p>Organizer::<a href="fundraiser.html?id=${fundraiser.FUNDRAISER_ID}" class="organizer-link"> ${fundraiser.ORGANIZER}</a></p>
                    <p>TargetAmount: ￥${fundraiser.TARGET_FUNDING}</p>
                    <p>CurrentFunding:￥${fundraiser.CURRENT_FUNDING}</p>
                    <p>City: ${fundraiser.CITY}</p>
                    <p>Category: ${fundraiser.name}</p>
                `;
                list.appendChild(div);// 将筹款人信息添加到列表中
            });
            if(data.length === 0) {// 如果没有筹款人数据
                list.innerHTML = '<strong style="color:red;">没有活跃的筹款人</strong>';// 显示提示信息
            }
        });


});

