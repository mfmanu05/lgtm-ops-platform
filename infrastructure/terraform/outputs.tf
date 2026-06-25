output "public_ip" {

  value = aws_instance.lgtm.public_ip

}


output "grafana_url" {

  value = "http://${aws_instance.lgtm.public_ip}:3001"

}
