<?php
    header("Content-Type:text/html;charset:UTF-8");
?>

    <div class="clear">
        <a href="index.html">
            <img src="img/logo_white.png">
        </a>
        <div class="select">
            <a href="register.html">注册</a>
            <a id="load" href="#model_load">登陆</a>
            <span></span>
           <form id="search">
           		  <input type="text" placeholder="搜点什么...">
           		  <button type="submit"></button>
           		</form>
        </div>
        <ul class="top_list">
            <li>
                <a href="index.html">首页</a>
            </li>
            <li>
                <a href="phone.html">电子产品</a>
            </li>
            <li>
                <a href="ai.html">人工智能</a>
            </li>
            <li>
                <a href="vr.html">VR</a>
            </li>
            <li>
                <a href="uav.html">无人机</a>
            </li>
            <li>
                <a class="more" href="more.html">更多</a>
              <!-- <div class="science_con">
                    <span class="jiao"></span>
                    <ul>
                        <li>
                            <a href="#">VR虚拟化</a>
                        </li>
                        <li>
                            <a href="#">人工智能</a>
                        </li>
                        <li>
                            <a href="#">智能穿戴</a>
                        </li>
                        <li>
                            <a href="#">智能家居</a>
                        </li>
                        <li>
                            <a href="#">3D打印机</a>
                        </li>
                        <li>
                            <a href="#">智能汽车</a>
                        </li>
                        <li>
                            <a href="#">AR增强现实</a>
                        </li>
                        <li>
                            <a href="#">无人机</a>
                        </li>
                        <li>
                            <a href="#">智慧医疗</a>
                        </li>
                        <li>
                            <a href="#">智能硬件</a>
                        </li>
                        <li>
                            <a href="#">智慧城市</a>
                        </li>
                        <li>
                            <a href="#">智能家居</a>
                        </li>
                    </ul>
                </div>-->
            </li>
        </ul>
    </div>
<div id="model_load">
  <div class="model_load_top">
    <span class="model_close">&times;</span>

    <h2>登陆黑科技账号</h2>
    <div class="model_load_body">
      <p>

      </p>
      <form id="form1">
        <div class="model_load_user">
        <div>
          <input id="user" type="text" placeholder="手机号/邮箱/用户名">
           </div>
          <input id="pwd" type="text" placeholder="密码">
          <input class="code_import" type="text" placeholder="验证码">
          <div id="verification_code">
               <img src="data/vcode.php"/>
               <span onclick="change(this)">刷新</span>
          </div>
        </div>
        <div class="write_pwd">
          <input id="isrem" type="checkbox">
          <label for="isrem">
          记住密码</label>
        </div>
        <div id="submit">
          <button type="submit">登陆</button>
        </div>
      </form>
    </div>
    <div class="model_load_foot">
        <p>其他方式登陆</p>
        <div>
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a></div>
    </div>
  </div>
</div>