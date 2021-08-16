(function () {
    var div = document.createElement("div");
    document.getElementsByTagName('body')[0].appendChild(div);
    div.outerHTML = "<div id='botDiv' style='height: 38px; position: fixed; bottom: 0; z-index: 1000; background-color: #007FFF'><div id='botTitleBar' style='height: 20px; width: 380px; position:fixed;background-color: #007FFF; color: #FFF; margin: auto; padding: 10px; cursor: pointer;'>Chat</div><iframe width='400px' height='600px' src='https://webchat.botframework.com/embed/JobsPlus-TrialJM?s=8ia_eUX6wcU.lKBUhAblW2JjY08lsb57mqTZ3sUGQBgXYCeWfrigLk8'></iframe></div>"; 

    document.querySelector('body').addEventListener('click', function (e) {
        e.target.matches = e.target.matches || e.target.msMatchesSelector;
        if (e.target.matches('#botTitleBar')) { 
            var botDiv = document.querySelector('#botDiv'); 
            botDiv.style.height = botDiv.style.height == '600px' ? '38px' : '600px';
        };
    });
}());