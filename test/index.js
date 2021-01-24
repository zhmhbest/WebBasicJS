
/**
 * 测试Hash
 */
WebBasicJS.hash.setData({
    x: "Hello",
    y: [1, 2, 3],
    z: {
        aa: "Apple",
        bb: "Body"
    }
});
WebBasicJS.hash.pushOnHashChange(function (ev) {
    // console.log(ev);
    console.log(WebBasicJS.hash.getData());
});


/**
 * 测试Screen
 */
WebBasicJS.screen.pushOnScreenResize(function (ev) {
    console.log(WebBasicJS.screen.getClientRect());
});


/**
 * 测试Cookie Date
 */
let t = WebBasicJS.date.format();
WebBasicJS.cookie.set("my-cookie", { "Harry": t });
console.log(WebBasicJS.cookie.get("my-cookie"));
WebBasicJS.cookie.del("my-cookie");


/**
 * 测试Ajax
 */
WebBasicJS.ajax.get("./index.js", "text", {
    aa: "AA"
}, {
    bb: "BB"
}).then(res => {
    console.log(res);
});
// WebBasicJS.ajax.post("./test.js", "text", {
//     aa: "AA"
// }, {
//     bb: "BB"
// }).then(res => {
//     console.log(res);
// });
let req = new WebBasicJS.ajax.Requester("./index", { a1: "A" }, { b1: "B" });
req.get(".js", undefined, {
    a2: "AA"
}, {
    b2: "BB"
}).then(res => {
    console.log(res);
});



/**
 * 测试Form
 */
WebBasicJS.form.setSelectOptions('select', [
    { title: "-A-", value: "A" },
    { title: "-B-", value: "B" },
    { title: "-C-", value: "C" },
]);
function queryForm() {
    console.log(
        WebBasicJS.form.getFormValues('form')
    );
}
function setForm() {
    WebBasicJS.form.setFormValues('form', {
        radio: 'F',
        checkbox: ['A', 'C'],
        range: 25,
        color: '#FFEEDD',
        // file: ""
    });
}


/**
 * 测试File
 */
function loadFiles() {
    const f = new WebBasicJS.file.FileLoader();
    f.bindLoad(fs => {
        const f = fs[0];
        WebBasicJS.file.readFileText(f, text => {
            console.log(text);
        });
        // WebBasicJS.file.readFileBase64(f, b64 => {
        //     console.log(b64);
        // });
        WebBasicJS.file.readFileBinary(f, bin => {
            console.log(bin);
        })
    });
}
function downloadFile() {
    WebBasicJS.file.downloadText({
        A: "王哈哈",
        B: [1, 2, 3],
        C: {
            People: "Republic"
        }
    }, "abc.json");
}