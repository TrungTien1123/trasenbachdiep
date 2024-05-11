package vn.com.trungtien.management.configuration.security;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
//import vn.com.trungtien.management.exception.ErrorResponse1;
import vn.com.trungtien.management.services.AccountService;
import vn.com.trungtien.management.utils.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class AuthTokenFilter extends OncePerRequestFilter{
	
	@Autowired
	private JwtUtils jwtUtils;
	
	@Autowired
	private AccountService acService;
	
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		try {
			String token = getTokenFromRequest(request);
			if (token != null && jwtUtils.validateJwtToken(token)) {
				String username = jwtUtils.getUserNameFromJwtToken(token);
				
				UserDetails usDetails = acService.loadUserByUsername(username);
				
				System.out.println("user details: ");
				System.out.println(usDetails.toString());
				UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(usDetails, null, usDetails.getAuthorities());
				
				auth.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
				
				SecurityContextHolder.getContext().setAuthentication(auth);
			}
			filterChain.doFilter(request, response);
		}catch (Exception e) {
			System.out.println("runtime ex: ");
			System.out.println(e);
//			String msg = "";
			
//			msg = e.getMessage();
//			ErrorResponse errorResponse = new ErrorResponse1 (HttpStatus.UNAUTHORIZED, msg);
//
//			response.setStatus(HttpStatus.UNAUTHORIZED.value());
//            response.getWriter().write(convertObjectToJson(errorResponse));
		}
	}

//	@Override
//	protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException {
//		return Boolean.TRUE.equals(request.getAttribute(SHOULD_NOT_FILTER));
//	}
	public String convertObjectToJson(Object object) throws JsonProcessingException {
        if (object == null) {
            return null;
        }
        ObjectMapper mapper = new ObjectMapper();
        return mapper.writeValueAsString(object);
    }
	
	private String getTokenFromRequest(HttpServletRequest request) {
		String headerAuth = request.getHeader("Authorization");
		if (StringUtils.hasText(headerAuth) && headerAuth.startsWith("Bearer")) {
			return headerAuth.substring(7, headerAuth.length());
		}
		return null;
	}

}
