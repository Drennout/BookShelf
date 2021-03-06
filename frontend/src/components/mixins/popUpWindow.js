export const popUpWindow = {
    method:{
        popUp(){
            var overlay	= document.querySelector('.overlay'),
                mOpen	= document.querySelectorAll('[data-modal]'),
                mClose	= document.querySelectorAll('[data-close]'),
                mStatus	= false;// флаг всплывающего окна: false - окно закрыто, true - открыто
            var body = document.querySelector("body")

            if (mOpen.length == 0) //если нет всплывающих окон, то завершае работу скрипта
                return;

            [].forEach.call(mOpen, function(el) {
                el.addEventListener('click', function() {
                    var modalId	= el.getAttribute('data-modal'),//возвращает значение указанного атрибута элемента.
                        modal	= document.getElementById(modalId);
                    modalShow(modal);
                    body.style.overflow = 'hidden';
                });
            });

            [].forEach.call(mClose, function(el) {
                el.addEventListener('click', modalClose);
            });

            document.addEventListener('keydown', modalClose);//Чтобы можно было закрыть по нажатии esc

            function modalShow(modal) {
                overlay.classList.remove('fadeOut');
                overlay.classList.add('fadeIn');
                modal.classList.remove('fadeOut');
                modal.classList.add('fadeIn');

                mStatus = true;
            }

            function modalClose(event) {
                if (mStatus && ( !event.keyCode || event.keyCode === 27 ) ) {
                    var modals = document.querySelectorAll('.dlg-modal');

                    [].forEach.call(modals, function(modal) {
                        modal.classList.remove('fadeIn');
                        body.style.overflow = '';
                    });
                    overlay.classList.remove('fadeIn');
                    overlay.classList.add('fadeOut');
                    mStatus = false;


                }
            }
        },
        validate_form(){
            alert("Спасибо за заказ! Мы скоро перезвоним вам")
        },
        complete_registration() {
          alert("Вы зарегестрированы. Добро пожаловать в наш клуб.")
        }
    }
}