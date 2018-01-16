$(function() {

    var mail = '';
    var name = '';

    //**** 初期処理 ****
    (function (){

        // 初期処理でセッション情報を取得
        mail = window.sessionStorage.getItem(['user_email']);        
        name = window.sessionStorage.getItem(['user_name']);
        
        if(mail!=null && name !=null){
            $('#result').after('<div id="submit_result" class="section__block section__block--notification"><p>メール:'+mail+'</br>名前  :'+name+'</br>セッション情報を保持しています。</p></div>');             
        }
        
    })();

    // 登録ボタン押下イベント
    $('#submit').click(onClickSubmit);

    // セッション解除押下イベント
    $('#clear').click(onClickClear);

    $('#load').click(onLoad);

    //登録ボタン押下処理
    function onClickSubmit(){
        $('#submit_result').remove();
        mail = $('#user_mail').val();
        name = $('#user_name').val();
        
        if(mail!='' && name !=''){

            //セッションストレージ開始
            window.sessionStorage.setItem(['user_email'],[mail]);
            window.sessionStorage.setItem(['user_name'],[name]); 

            //セッション登録完了メッセージ
            $('#result').after('<div id="submit_result" class="section__block section__block--notification"><p>メール:'+mail+'</br>名前  :'+name+'</br>セッション情報に登録しました。</p></div>');            

        }else{
            //登録失敗メッセージ
            $('#result').after('<div id="submit_result" class="section__block section__block--notification-red"><p>メールアドレス・名前を入力してください。</p></div>');            
        }
    }

    function onClickClear(){
        $('#submit_result').remove();
        $('#result').after('<div id="submit_result" class="section__block section__block--notification"><p>セッション情報を破棄しました。</p></div>');                    
        //セッション情報クリア
        window.sessionStorage.clear();
    }

    function onLoad(){
        $('#submit_result').remove();
        location.reload();
    }
});