(function(){
    // console.log("Initialized")
    const playArea = document.getElementById('play-svg');
    const playContainer = document.getElementsByClassName("play")[0];
    const playButton = document.getElementById('play-button');
    // console.log("Play Area",playArea)
    playArea.addEventListener('mouseenter',()=>{
        // console.log("Over");
        playContainer.style.color="#ffffffff";
        playButton.style.display = "block";
    })
    
    playArea.addEventListener('mouseleave',()=>{
        // console.log("Leave");
        playContainer.style.color="#ffffff00";
        playButton.style.display = "none";
    });
    playButton.addEventListener('mouseenter',()=>{
        // console.log("Over");
        playContainer.style.color="#ffffffff";
        playButton.style.display = "block";
    })
    playButton.addEventListener('mouseleave',()=>{
        // console.log("Leave");
        playContainer.style.color="#ffffff00";
        playButton.style.display = "none";
    });

    // console.log("Initialized")
    const mintArea = document.getElementById('mint-svg');
    const mintContainer = document.getElementsByClassName("mint")[0];
    const mintButton = document.getElementById('mint-button');
    // console.log("Play Area",mintArea)
    mintArea.addEventListener('mouseenter',()=>{
        // console.log("Over");
        mintContainer.style.color="#ffffffff";
        mintButton.style.display = "block";
    })
    
    mintArea.addEventListener('mouseleave',()=>{
        // console.log("Leave");
        mintContainer.style.color="#ffffff00";
        mintButton.style.display = "none";
    });
    mintButton.addEventListener('mouseenter',()=>{
        // console.log("Over");
        mintContainer.style.color="#ffffffff";
        mintButton.style.display = "block";
    })
    mintButton.addEventListener('mouseleave',()=>{
        // console.log("Leave");
        mintContainer.style.color="#ffffff00";
        mintButton.style.display = "none";
    });

    // Market
    // console.log("Initialized")
    const marketArea = document.getElementById('market-svg');
    const marketContainer = document.getElementsByClassName("market")[0];
    const marketButton = document.getElementById('market-button');
    // console.log("Play Area",marketArea)
    marketArea.addEventListener('mouseenter',()=>{
        // console.log("Over");
        marketContainer.style.color="#ffffffff";
        marketButton.style.display = "block";
    })
    
    marketArea.addEventListener('mouseleave',()=>{
        // console.log("Leave");
        marketContainer.style.color="#ffffff00";
        marketButton.style.display = "none";
    });
    marketButton.addEventListener('mouseenter',()=>{
        // console.log("Over");
        marketContainer.style.color="#ffffffff";
        marketButton.style.display = "block";
    })
    marketButton.addEventListener('mouseleave',()=>{
        // console.log("Leave");
        marketContainer.style.color="#ffffff00";
        marketButton.style.display = "none";
    });
})();