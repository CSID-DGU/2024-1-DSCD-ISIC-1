# Generated by Django 4.2.11 on 2024-06-15 23:08

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("accounts", "0003_alter_profile_award_part_alter_profile_club_part_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="profile",
            name="award_detail",
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name="profile",
            name="award_part",
            field=models.CharField(default="해당 없음", max_length=100),
        ),
        migrations.AlterField(
            model_name="profile",
            name="club_detail",
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name="profile",
            name="club_part",
            field=models.CharField(default="해당 없음", max_length=100),
        ),
        migrations.AlterField(
            model_name="profile",
            name="double_major",
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name="profile",
            name="project_detail",
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name="profile",
            name="project_part",
            field=models.CharField(default="해당 없음", max_length=100),
        ),
        migrations.AlterField(
            model_name="profile",
            name="skills",
            field=models.CharField(default="사용 가능한 skill 없음", max_length=100),
        ),
    ]
