(function(){
    var P = ["\\Benjamin", "|Kayode", "/Eventuarry", "-Haq Haq Haq"];
    var x = 0;

    return setInterval(function(){
        process.stdout.write("\r" + P[x++]);
        x &= 3;
    }, 100);
})();
