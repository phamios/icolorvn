<div class="box grid_12">
	<div class="box-head">
		<h2>Khuyến mại - <?php echo $pages;?></h2> 
	</div>
	<div class="box-content no-pad"> 
		 <table class="display" id="example">
                            <thead>
                                <tr>                                    
                                     <th  >ID</th> 
								<th>Tiêu đề </th>
								<th>Nội dung</th> 
								<th>Ngày</th> 
								<th  >Tuỳ chỉnh</th>                       
                                </tr>
                            </thead>
                            <tbody>
                            	<?php if($receivesmo <> null):?>
                            	<?php foreach($receivesmo as $morow):?>
                                <tr class="odd">
								<td><?php echo $morow->id;?></td> 
								<td><?php echo $morow->title;?></td>
								<td><?php echo substr($morow->content, 0,200);?></td>  
								<td><?php echo $morow->created;?></td> 
								<td><a href="<?php echo site_url('admincp/delnotify/'.$morow->id);?>" class="ico del">Xoá </a> </td>
							</tr>
                                <?php endforeach; ?>   
                                <?php endif;?>                           
                            </tbody>
                        </table>
	</div>
</div>
