<div class="box grid_12">
	<div class="box-head">
		<h2>Log truy cập</h2>
	</div>
	<div class="box-content">
	<?php echo $pages_logs;?>
		<table class="display" id="example">
			<thead>
				<tr>
					<th>User</th>
					<th>IP address</th>
					<th>User Agent</th>
					<th>Module access</th>
					<th>Time access</th>
					<th>Day Access</th>
				</tr>
			</thead>
			<tbody>
				<?php foreach($total_log as $log):?>
				<tr class="odd gradeX">
					<td><?php foreach($total_user_list as $user):?>
						<?php if($user->id == $log->userid):?>
							<?php echo $user->username;?>
						<?php endif;?>
					<?php endforeach;?>
					</td>
					<td><?php echo $log->ip_address;?>
					</td>
					<td><?php echo $log->user_agent;?>
					</td>
					<td><?php echo $log->module;?>
					</td>
					<td><?php echo $log->logtime;?>
					</td>
					<td><?php echo $log->logday;?>
					</td>

				</tr>
				<?php endforeach;?>
			</tbody>
		</table>
		<?php echo $pages_logs;?>
	</div>
</div>
