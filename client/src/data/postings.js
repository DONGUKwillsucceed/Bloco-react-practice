let postings=[
    {
        img: 'logo512.png',
        title: 'CSS가 어려워진 이유',
        author:'도토리너구리',
        content: 'This is Not A Game',
        date: new Date().toLocaleDateString(),
    }
];

export function addPost(title, content){
    console.log(title, content);
    const posting = {
        title,
        content,
        author:'도토리너구리',
        date : new Date().toLocaleDateString
    }

    postings.push(posting);
    return;
}

export function getAllPost(){
    return postings;
}

export function getLatestPost(){
    return postings[postings.length-1];
}

export function getLength(){
    return postings? postings.length : 0;
}