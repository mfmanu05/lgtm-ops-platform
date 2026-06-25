resource "aws_instance" "lgtm" {


  ami = "ami-0c02fb55956c7d316"


  instance_type = var.instance_type


  key_name = var.key_name


  vpc_security_group_ids = [
    aws_security_group.lgtm_sg.id
  ]


  user_data = file("user_data.sh")


  tags = {

    Name = var.project_name

  }

}
