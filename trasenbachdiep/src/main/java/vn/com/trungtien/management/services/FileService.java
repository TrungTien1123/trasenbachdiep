package vn.com.trungtien.management.services;

import vn.com.trungtien.management.utils.FileManager;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Date;

@Service
public class FileService implements IFileService{

	private FileManager fileManager = new FileManager();
	
	//private String linkFolder = "E:\\VTI\\Rocket20\\Reactjs\\Buoi11\\public\\upload";
	private String linkFolder = "/Users/trungtien/trasenbachdiep-client/public/upload";
	@Override
	public String upLoadImage(MultipartFile image) throws IOException {
		String nameImage = new Date().getTime() + "." + fileManager.getFormatFile(image.getOriginalFilename());

		String path = linkFolder + "/" + nameImage;

		fileManager.createNewMultiPartFile(path, image);

		// TODO save link file to database

		// return link uploaded file
		return path;
	}

}
