<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class admin_store extends CI_Controller {

	function __construct()
	{
		parent::__construct();
		$this->load->helper('url');
		$this->load->library('upload');
		$this->load->library('pagination');
		$this->load->library('parser');
		$this->load->model('app_content');
		$this->load->helper(array('form', 'url'));

	}
	public function index(){
		$this->load->view('huyxom/admin/main');
	}
	public function cate(){

		if (isset($_REQUEST['submit'])) {
			$catename = $this->input->post('catename', true);
			$cateroot = $this->input->post('cateroot', true);
			$active =$this->input->post('active',true);
			$mypath= "./src/imagescontent";
			$image = null;
			if ( !$image =  $this->do_upload_image($mypath,'images')){
				$error = array( 'error' => $this->upload->display_errors() );
			}
			$this->app_content->add_cate($catename,$cateroot,$image,$active);
			redirect('admin_store/cate');
		}
		$data['allcate'] = $this->app_content->get_cate();
		$this->load->view('huyxom/admin/main',$data);
	}
	public function del_cate($id=null){
		$this->app_content->del_cate($id);
		redirect('admin_store/cate');
	}
	public function del_news($id=null){
		$this->app_content->del_news($id);
		redirect('admin_store/news');
	}
	public function news(){
		if (isset($_REQUEST['submit'])) {
			$cateid = $this->input->post('cate', true);
			$title = $this->input->post('title', true);
			$desc =$this->input->post('desc',true);
			$content = $this->input->post('content', true);
			$link = $this->input->post('link', true);
			$file =$this->input->post('file',true);
			$active =$this->input->post('active',true);
			$mypath= "./src/imagescontent";
			$img_thumb = null;
			if ( !$img_thumb =  $this->do_upload_image($mypath,'images')){
				$error = array( 'error' => $this->upload->display_errors() );
			}
			$this->app_content->add_news($cateid,$img_thumb,$title,$desc,$content,$link,$file,$active);
			redirect('admin_store/news');
		}
		$data['allnew'] = $this->app_content->get_news();
		$data['allcate'] = $this->app_content->get_cate();
		$this->load->view('huyxom/admin/main',$data);
	}
	public function logs(){
		$this->load->view('huyxom/admin/main');
	}

	function do_upload_image($mypath,$filename){
		$config['upload_path'] = $mypath;
		$config['allowed_types'] = 'gif|jpg|png|bmp';
		$config['max_size']	= '80000';
		$this->load->library('upload', $config);
		$this->upload->initialize($config);
		if(isset($filename))
		{
			//echo $filename; die();
			if (!$this->upload->do_upload($filename))
			{
				$error = array('error' => $this->upload->display_errors());
				return NULL;
			}
			else
			{
				$data = array('upload_data' => $this->upload->data());
				$imagename = $this->upload->file_name;
				return $imagename;
			}
		}else {
			echo $this->upload->display_errors();
		}
	}
}
?>