from django.contrib import admin
from .models import Post, Draft
from import_export.admin import ImportExportModelAdmin

# Register your models here.
# admin.site.register(Post)
# admin.site.register(Draft)


@admin.register(Draft)
@admin.register(Post)
class ViewAdmin(ImportExportModelAdmin):
    pass
