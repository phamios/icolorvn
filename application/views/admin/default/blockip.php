<div class="box grid_12">
	<div class="box-head">
		<h2>Block IP - Security</h2>
	</div>
	<div class="box-content">
		<div class="block-fluid">
			<table class="display" id="example">
				<thead>
					<tr>
						<th  >No</th>
						<th>IP</th>
						<th  >Setting</th>
					</tr>

				</thead>
				<tbody>
					<?php $i=0;?>
				<?php foreach($ipblocks as $ip):?>
				<?php $i=$i + 1;?>
				<tr class="odd">
					<td><?php echo $i;?>
					</td>
					<td><?php echo $ip->ipaddress;?>
					</td>

					<td><a href="<?php echo site_url('admincp/deleteip/'.$ip->id);?>"
						class="ico del">Xoá </a><a href="#" class="ico edit">Sửa</a>
					</td>
				</tr>
				<?php endforeach;?>
			</table>

		</div>
	</div>
</div>
