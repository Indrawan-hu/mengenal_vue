Vue.component('comments', {
    template: '#comment-template',
    props: ['comment'],
    data: function () {
        return {
            plus: false,
            minus: false,
        }
    },
    methods: {
        tambah: function () {
            this.plus = !this.plus
            this.minus = false
            console.log('Tanda Plus : ' + this.plus);
            console.log('Tanda Minus : ' + this.minus);
        },
        kurang: function () {
            this.minus = !this.minus
            this.plus = false
            console.log('Tanda Plus : ' + this.plus);
            console.log('Tanda Minus : ' + this.minus);
        }
    },
    computed: {
        score: function () {
            if (this.plus) {
                return this.comment.score + 1
            }
            else if (this.minus) {
                return this.comment.score - 1
            }
            else {
                return this.comment.score
            }
        }
    }
});

let vm = new Vue({
    el: '#app',
    data: {
        comments: [
            {
                body: "Komentar 1 ",
                time: "29-01-2021",
                score: 0
            },
            {
                body: "Komentar 2 ",
                time: "28-01-2021",
                score: 5
            },
            {
                body: "Komentar 3 ",
                time: "30-01-2021",
                score: 5
            },
        ],
        comment_text: '',
    },
    methods: {
        postComment: function () {
            console.log("tes");
            this.comments.push(
                {
                    body: this.comment_text,
                    time: "30-01-2021",
                    score: 0
                }
            )
            this.comment_text = ''
        }
    }
});