// 获取按钮和作品元素
const filterButtons = document.querySelectorAll('.filter-button');
const galleryItems = document.querySelectorAll('.gallery-item');

// 为每个按钮添加点击事件
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // 移除所有按钮的 active 类
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // 为当前按钮添加 active 类
        button.classList.add('active');

        // 获取当前按钮的筛选条件
        const filter = button.getAttribute('data-filter');

        // 遍历所有作品，根据筛选条件显示或隐藏
        galleryItems.forEach(item => {
            if (filter === 'all' || item.classList.contains(filter)) {
                item.style.display = 'block'; // 显示符合条件的作品
            } else {
                item.style.display = 'none'; // 隐藏不符合条件的作品
            }
        });
    });
});