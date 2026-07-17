resource "aws_instance" "lgtm" {
  ami           = data.aws_ami.ubuntu.id
  instance_type = var.instance_type
  key_name      = var.key_name

  vpc_security_group_ids = [
    aws_security_group.lgtm_sg.id
  ]

  user_data = file("user_data.sh")

  # 👉 Configuração do volume raiz adicionada aqui:
  root_block_device {
    volume_size           = 50    # Tamanho em Gigabytes (mude se precisar de mais)
    volume_type           = "gp3" # Tipo de volume recomendado pela AWS
    delete_on_termination = true  # Apaga o disco automaticamente se a instância for destruída
    encrypted             = true  # Opcional: Garante que os dados no disco fiquem criptografados
  }

  tags = {
    Name = var.project_name
  }
}
