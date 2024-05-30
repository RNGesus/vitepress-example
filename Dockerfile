FROM httpd:2.4
 
COPY ./.vitepress/docs/dist/ /usr/local/apache2/htdocs/