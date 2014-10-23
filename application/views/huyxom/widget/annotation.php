  <?php if($notification <> NULL):?>
  <div class="global_notification">
	<div class="row-fluid">
		<div class="container">
			<div class="banner-content alert alert-info"  >
				<?php  foreach($notification as $row):?>
					<?php  echo $row->content;?>
				<?php  endforeach;?> 
				<button type="button" class="close" data-dismiss="alert">×</button>
			</div>
		</div>
	</div>
</div> 
<?php endif;?>

