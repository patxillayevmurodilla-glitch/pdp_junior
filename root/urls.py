
from django.contrib import admin
from django.urls import path
from django.conf.urls.static import static
from app.views import IndexView, CourseView, MentorsView, PortfolioView, TeamView, ContactView
from root import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', IndexView.as_view(), name='index'),
    path('courses/', CourseView.as_view(), name='courses'),
    path('mentors/', MentorsView.as_view(), name='mentors'),
    path('portfolio/', PortfolioView.as_view(), name='portfolio'),
    path('team/', TeamView.as_view(), name='team'),
    path('contact/', ContactView.as_view(), name='contact')
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
