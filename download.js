function downloadbook(){
    const anchor = document.createElement("a");
    anchor.href = "downloads/Livro.pdf";
    anchor.download = "book";

    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
}

function acess(){
    window.location.href = "https://drive.google.com/file/d/1Mk0SDVRPQqGJFpUeDMuswKHQFeguCfNL/view?usp=sharing"
}

// https://drive.google.com/file/d/1Mk0SDVRPQqGJFpUeDMuswKHQFeguCfNL/view?usp=sharing