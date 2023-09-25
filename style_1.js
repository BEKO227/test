const urls = [
[
    'https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg',
    'https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559_1280.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1nrGGDniM-aU2w3rv30bLYp2GCo4Sl_uX_G3GjrZs&s',
],
[
'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg',
'https://hips.hearstapps.com/hmg-prod/images/cute-cat-photos-1593441022.jpg?crop=0.670xw:1.00xh;0.167xw,0&resize=640:*',
'https://static.vecteezy.com/system/resources/thumbnails/022/640/901/small/cat-vibrant-cute-loveable-beautiful-gorgeous-photo.jpg'
],
['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDTIosRtuM-YrPKHamPNqdwdLI270IQfSy75kCjzYQ&s',
'https://media.nature.com/lw767/magazine-assets/d41586-019-00735-4/d41586-019-00735-4_16516420.jpg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9fekM4oEuykvFcnXaNS47vVs1R9N51JKE4B6rXJmz&s',
]
];
function getRandomImage(){
    const animals=document.getElementById("animals");
    const selectedCategory=animals.value;
    const randomIndex=Math.floor(Math.random() * urls[selectedCategory].length);
    const randomUrl=urls[selectedCategory][randomIndex];
    const randomImage=document.getElementById('imgContainer');
    randomImage.src=randomUrl;
}