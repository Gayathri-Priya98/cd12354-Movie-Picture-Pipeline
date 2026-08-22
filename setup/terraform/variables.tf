variable "k8s_version" {
<<<<<<< HEAD
  default = "1.29"
=======
  default = "1.25"
>>>>>>> c38cdd2c54042d5ecfd6c56575d2af49728bea8c
}

variable "enable_private" {
  default = false
}

variable "public_az" {
  type        = string
  description = "Change this to a letter a-f only if you encounter an error during setup"
  default     = "a"
}

variable "private_az" {
  type        = string
  description = "Change this to a letter a-f only if you encounter an error during setup"
  default     = "b"
}
