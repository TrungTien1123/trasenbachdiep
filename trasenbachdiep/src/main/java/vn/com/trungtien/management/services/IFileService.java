package vn.com.trungtien.management.services;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface IFileService {
	String upLoadImage(MultipartFile image) throws IOException;
}
