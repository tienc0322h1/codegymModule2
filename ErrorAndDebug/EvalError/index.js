let score = {
    checkerror: function (score) {
        if (score<0) {
            try{
                throw new EvalError("Error Occured/Xảy ra lỗi");
            }
            catch (e) {
                console.log(e.message);
            }
        }
}
}
console.log(score.checkerror(-3));
