<div class="navbar-content container">

					<!-- .btn-navbar is used as the toggle for collapsed navbar content -->
					<a class="btn btn-navbar" data-toggle="collapse"
						data-target=".nav-collapse"> <span class="icon-bar"></span> <span
						class="icon-bar"></span> <span class="icon-bar"></span> </a>
					<!--BRAND NAME-->
					<a id="band-name"
						class="brand hidden-desktop visible-tablet visible-phone"
						href="<?php echo site_url()?>"> &nbsp; <i
						class="icon-home"></i> Huyxom Store </a>

					<div class="nav-collapse collapse">

						<ul class="nav">

							<li class="visible-desktop hidden-tablet hidden-phone "><a
								href="<?php echo site_url()?>"> Trang chủ</a>
							</li>

							<!--PRODUCTS-->
							<?php foreach($alltype as $type):?>
								
							<li class="dropdown "><a href="#" class="dropdown-toggle"
								data-toggle="dropdown"> <?php echo $type->nametype?> <b class="caret"></b> </a>
								
								<ul class="dropdown-menu">
									<?php foreach($allcate as $cate):?>
									<?php if($cate->typeid==$type->id):?>
									<li>
										<a href="<?php echo site_url('category/'.mb_strtolower(url_title(removesign($cate->catename.'-'.$cate->id)))).'.html'?>"><?php echo $cate->catename;?> </a>
									</li> 
									<?php endif;?>
									<?php endforeach;?>
								</ul>
								
							</li>
								
							<?php endforeach;?>

							<!--USER-->
							<!-- 
							<li class="dropdown " id="user_link"><a href="#"
								class="dropdown-toggle" data-toggle="dropdown">Thành viên</a>
								<ul class="dropdown-menu">
									<li><a href="http://store.analoguehouse.com/members/login">
											Đăng nhập </a>
									</li>

									<li><a href="http://store.analoguehouse.com/members/register">
											Đăng Kí Tài Khoản </a>
									</li>

								</ul>
							</li> -->
						</ul>
						<!--SEARCH-->
						 <?php echo form_open_multipart('search',array('class'=>'navbar-search pull-right')); ?>
							<div class="hiddenFields">
								<input name="ACT" value="178" type="hidden"> <input
									name="params"
									value="eyJjb2xsZWN0aW9uIjoicHJvZHVjdHMiLCJsb29zZV9lbmRzIjoiYm90aCJ9"
									type="hidden"> <input name="site_id" value="1" type="hidden">
							</div>

							<input name="keywords" id="keywords" class="search-query span3"
								placeholder="Tìm kiếm" type="text">

						<?php echo form_close(); ?> 

					</div>
					<!--end of nav-collapse collapse-->

				</div>